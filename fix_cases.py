import json
import re

file_path = "src/data/cases.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace images
xray_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Dog_X-ray.jpg/800px-Dog_X-ray.jpg"
content = re.sub(r"https://loremflickr\.com/800/600/xray,bone\?lock=\d+", xray_url, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replaced placeholder images.")
