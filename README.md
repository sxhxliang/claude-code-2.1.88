npm i @anthropic-ai/claude-code

cp node_modules/@anthropic-ai/claude-code/cli.js.map .

npm install --global reverse-sourcemap

reverse-sourcemap -o cli -v cli.js.map
