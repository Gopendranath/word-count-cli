# word-count-cli

A powerful CLI tool for counting words in files or raw text with interactive prompts and detailed word analysis.

## Features

- 📊 Count words from files or raw text input
- 🎯 Interactive command-line interface
- 📋 Detailed word frequency analysis
- 🎨 Beautiful colored output
- ⚡ Fast and efficient processing

## Installation

```bash
npm install -g wd-counter-cli
```

## Usage

### Count words from files or text

```bash
wd-cli count
```

You'll be prompted to select a file or enter custom input. You can also pass arguments directly:

```bash
wd-cli count "path/to/file.txt"
wd-cli count "Some text to count"
wd-cli count file1.txt file2.txt "raw text"
```

### Other commands

```bash
wd-cli greet          # Interactive greeting
wd-cli ask            # Ask a question
wd-cli --version      # Show version
wd-cli --help         # Show help
```

## Requirements

- Node.js >= 16.0.0
- npm

## Development

```bash
# Clone the repository
git clone https://github.com/rick-999/word-count-cli.git
cd word-count-cli

# Install dependencies
npm install

# Run the CLI locally
node index.js count
```

## License

ISC

## Author

rick-999
