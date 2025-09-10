---
marp: true
theme: nersc
paginate: true
---

<!-- _class: title -->

# **Rust at NERSC**
## Usage and Facilities

<div class="authors">
<strong>Nestor Demeure</strong><br>
National Energy Research Scientific Computing Center, Berkeley CA, United States
</div>

---

TODO: Who am I slide here.

---

# Rust in HPC

While relatively new in the HPC world, [Rust](https://www.rust-lang.org/) delivers:

* **C++-like performance**
* **Strong compile-time checks**:
  * No segfaults in safe Rust code
* **First-class CPU parallelism**:
  * [Rayon](https://docs.rs/rayon/latest/rayon/): easy OpenMP-like multi-threading
  * Compiler support, flagging whole classes of concurrency bugs and data races at compile time
* **First-class tooling**:
  * [Cargo](https://doc.rust-lang.org/cargo/): for easy dependency management, testing, and reproducible builds
  * [Rust-Analyzer](https://rust-analyzer.github.io/): state-of-the-art IDE integration
  * [etc](https://www.rust-lang.org/tools).
* **Excellent interoperability**:
  * Seamless integration with C/C++/Fortran (keeping existing HPC libraries available)
  * Growing, transparent, presence in the Python scientific ecosystem as the language of choice for high-performance kernels

---

<!-- _class: question -->

# **What is NERSC doing for Rust integration?**

---

<!-- _class: section-title -->

# Rust at NERSC
## Usage and Facilities

---

# Rust Module

NERSC is among the few HPC centers worldwide with dedicated Rust support:

* **Rust module**:
  * Built-in MPI support
  * Automatic `bindgen` integration for C/C++/Fortran interfacing
  * Reframe testing of our MPI integration over all channels (`stable`, `beta`, `nightly`) to anticipate bugs
  * CI integration for automatic updates following the Rust release cycle (*work in progress*)

* **[Dedicated Documentation](https://docs.nersc.gov/development/languages/rust/)**:
  * Focused on HPC use-cases and libraries
  * Keeping track of on-going GPU support

* **Integration with the wider Rust community**:
  * [Rust userlang forum](https://users.rust-lang.org/t/feedback-on-our-rust-documentation-for-hpc-users/127740)
  * [Rust reddit](https://www.reddit.com/r/rust/comments/1jp7byz/looking_for_feedback_on_our_rust_documentation/)
  * [HPC reddit](https://www.reddit.com/r/HPC/comments/1jpc3t5/looking_for_feedback_on_our_rust_documentation/))

* User study on Rust adoption patterns
  * Rust tickets
  * Rust module usage

---

# Internal Use

* Internal tools migration
  * [sshproxy](https://docs.nersc.gov/connect/mfa/#sshproxy),
  * [auto-consult](https://gitlab.nersc.gov/nersc/nersc-user-env/app/auto-consult)

---

# User Use

**TODO**
* check tickets
* check internal users

* David landay's team built a parallel MIP solver in Rust

---

<!-- _class: section-title -->

# Conclusion
## Overview and Perspectives

---

# Overview

* we provide a solide module and documentation
* growing rust use

---

# Perspectives

* finalize the CI integration
* user outreach and education to grow rust use where it is meaningful

---

<!-- _class: thanks -->

# **Thank you!**

## [(https://github.com/nestordemeure/nersc_markdown_slides/slide_decks/rust](https://github.com/nestordemeure/nersc_markdown_slides/slide_decks/rust)

ndemeure@lbl.gov
