#!/bin/bash

# NERSC Markdown Slides Debug Builder
# This utility builds the demo slide deck and converts pages to PNGs for visual comparison

set -e  # Exit on any error

# Configuration
DEMO_DIR="slide decks/demo"
THEME_PATH="../../style/nersc-theme.css"
DEBUG_DIR="debug"
DEMO_FILE="demo-slides.md"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔧 NERSC Slides Debug Builder${NC}"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d "$DEMO_DIR" ]; then
    echo -e "${RED}❌ Error: Run this script from the repository root directory${NC}"
    exit 1
fi

# Check if marp is installed
if ! command -v marp &> /dev/null; then
    echo -e "${RED}❌ Error: marp-cli is not installed${NC}"
    echo "Install with: npm install -g @marp-team/marp-cli"
    exit 1
fi

# Check if ImageMagick/poppler-utils is available for PDF to PNG conversion
if ! command -v pdftoppm &> /dev/null && ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ Error: Need either pdftoppm (poppler-utils) or convert (ImageMagick)${NC}"
    echo "Install with:"
    echo "  Ubuntu/Debian: sudo apt install poppler-utils"
    echo "  macOS: brew install poppler"
    exit 1
fi

# Clean and create debug directory
echo -e "${YELLOW}📁 Cleaning and creating debug directory...${NC}"
rm -rf "$DEBUG_DIR"
mkdir -p "$DEBUG_DIR"

# Change to demo directory
echo -e "${YELLOW}📂 Entering demo directory...${NC}"
cd "$DEMO_DIR"

# Build PDF
echo -e "${YELLOW}🔨 Building demo slides to PDF...${NC}"
echo -e "${YELLOW}   (marp output below)${NC}"
echo "=================================="

# Capture marp output and exit code
if marp "$DEMO_FILE" --pdf --theme "$THEME_PATH" --allow-local-files; then
    MARP_SUCCESS=true
else
    MARP_SUCCESS=false
fi

echo "=================================="

if [ "$MARP_SUCCESS" = false ] || [ ! -f "demo-slides.pdf" ]; then
    echo -e "${RED}❌ Error: PDF generation failed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ PDF generated successfully${NC}"

# Convert PDF pages to PNGs
echo -e "${YELLOW}🖼️  Converting PDF pages to PNGs...${NC}"

# Create debug directory relative to demo folder
DEBUG_RELATIVE="../../$DEBUG_DIR"
mkdir -p "$DEBUG_RELATIVE"

# Use pdftoppm if available (generally better quality), otherwise use convert
if command -v pdftoppm &> /dev/null; then
    pdftoppm -png -r 150 demo-slides.pdf "$DEBUG_RELATIVE/slide"
    # pdftoppm creates files like slide-1.png, slide-2.png automatically - no renaming needed
elif command -v convert &> /dev/null; then
    convert -density 150 demo-slides.pdf "$DEBUG_RELATIVE/slide-%d.png"
fi

# Count generated PNGs
cd "$DEBUG_RELATIVE"
png_count=$(ls slide-*.png 2>/dev/null | wc -l)
cd - > /dev/null

if [ "$png_count" -gt 0 ]; then
    echo -e "${GREEN}✅ Generated $png_count PNG files in $DEBUG_DIR/${NC}"
else
    echo -e "${RED}❌ Error: No PNG files generated${NC}"
    exit 1
fi

# Return to repo root
cd ../..

echo ""
echo -e "${GREEN}🎉 Debug build complete!${NC}"
echo "=================================="
echo -e "📄 PDF: ${DEMO_DIR}/demo-slides.pdf"
echo -e "🖼️  PNGs: ${DEBUG_DIR}/slide-*.png"
echo -e "📋 Example slides: style/example slides/*.png"
echo ""
echo -e "${YELLOW}💡 Compare the generated PNGs with the example slides to verify theme implementation${NC}"