import re

with open("src/data/cases.ts", "r") as f:
    content = f.read()

counter = 1
def replace_img(match):
    global counter
    # Avoid adding lock multiple times
    url = match.group(1)
    if "?lock=" not in url:
        res = f"imageTexture: '{url}?lock={counter}'"
    else:
        res = match.group(0)
    counter += 1
    return res

content = re.sub(r"imageTexture:\s*'([^']+)'", replace_img, content)

def add_evidence_id(match):
    block = match.group(0)
    if "ev_fisico" in block and "evidenceId" not in block:
        # First physical exam region
        block = re.sub(r"(region:\s*'[^']+',\s*)(text:)", r"\1evidenceId: 'ev_fisico', \2", block, count=1)
    
    if "rx_01" in block:
        global counter
        def replace_rx(m):
            global counter
            c = counter + 100
            counter += 1
            return f"image: 'https://loremflickr.com/800/600/xray,bone?lock={c}'"
        block = re.sub(r"image:\s*'https://placehold.co[^']+'", replace_rx, block)

    return block

cases = content.split("  {\n    id: 'c")
new_cases = [cases[0]]
for c in cases[1:]:
    c_block = "  {\n    id: 'c" + c
    c_block = add_evidence_id(c_block)
    new_cases.append(c_block)

new_content = "".join(new_cases)

with open("src/data/cases.ts", "w") as f:
    f.write(new_content)

print("Updated cases.ts successfully.")
