## Personal Portfolio

**Please go to** [here](https://KienTran2000.github.io) too see my portfolio.
--------------------------------------------------------------------------------------------------------

## Acknowledgements

- **Template by:** [Gsurma](https://github.com/gsurma)  
- **Images from:** [Unsplash](https://unsplash.com)  
- **Static icons provided by:** [Flaticon](https://www.flaticon.com)

### Icon Credits:
- [Vehicles icons](https://www.flaticon.com/free-icons/vehicles) by Flat Icons – Flaticon  
- [Khao manee cat icons](https://www.flaticon.com/authors/mrhamster) by MrHamster – Flaticon  
- [Flu icons](https://www.flaticon.com/authors/flatart-icons) by flatart_icons – Flaticon  
- [Natural disaster icons](https://www.flaticon.com/authors/freepik) by Freepik – Flaticon  
- [Airbnb icons](https://www.flaticon.com/authors/berkahicon) by berkahicon – Flaticon  
- [Pi icons](https://www.flaticon.com/authors/aprosymbols) by AProsymbols – Flaticon  
- [Emotion icons](https://www.flaticon.com/authors/freepik) by Freepik – Flaticon  
- [Assessment icons](https://www.flaticon.com/authors/design-circle) by Design Circle – Flaticon  
- [Basketball icons](https://www.flaticon.com/authors/mnauilady) by mnauilady – Flaticon
--------------------------------------------------------------------------------------------------------
# 🛠️ How to Run This Jekyll Project Locally (Windows)

This guide helps you install and run this Jekyll project step-by-step using Ruby, Bundler, and Jekyll on Windows.

## ✅ Prerequisites
- Windows OS
- Ruby (install via RubyInstaller)
- Git (optional but recommended)

## 📦 Installation & Setup

1. **Download and Install Ruby**
   - Visit https://rubyinstaller.org/downloads/
   - Download the latest version of Ruby+Devkit (e.g., Ruby+Devkit 3.x.x).
   - Run the installer.
   - ✅ Check the box "Add Ruby executables to your PATH" during setup.
   - After installation, a terminal will open for MSYS2 setup. Press `Enter` to proceed with the default option.

2. **Verify Ruby Installation**
   - Open your terminal (Command Prompt, PowerShell, or VS Code Terminal), and run:
     ```bash
     ruby -v
     ```
   - You should see something like: `ruby 3.x.xpXXX (date) [x64-mingw32]`

3. **Install Bundler and Jekyll**
   - Still in the terminal, run:
     ```bash
     gem install bundler jekyll
     ```

4. **Navigate to Your Project Directory**
   - Example:
     ```bash
     cd E:\D_BackUp\template\gsurma.github.io
     ```

5. **Install Dependencies**
   - Ensure the directory contains a file called `Gemfile`.
   - Then run:
     ```bash
     bundle install
     ```

6. **Run the Jekyll Server**
   - Start the local development server with:
     ```bash
     bundle exec jekyll serve
     ```

7. **Open the Site in Your Browser**
   - Visit: http://localhost:4000

## 🧩 Common Issues

- **Could not locate Gemfile**
  - You're in the wrong folder. Use `cd` to move into the project directory that contains the `Gemfile`.

- **‘ruby’ is not recognized**
  - Ruby wasn’t added to your PATH. Reinstall Ruby and make sure to check "Add to PATH" during installation.

- **Permission errors during gem install**
  - Try reopening the terminal as Administrator.

## 📝 Credits

Built with:
- [Jekyll](https://jekyllrb.com/)
- [Bundler](https://bundler.io/)
- [Ruby](https://www.ruby-lang.org/)

---


