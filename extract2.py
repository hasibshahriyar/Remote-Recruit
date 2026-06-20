import json
import re

transcript_path = r"C:\Users\shahr\.gemini\antigravity-ide\brain\40ae1f9e-52e4-42d4-a7bc-07d8ac49ac30\.system_generated\logs\transcript.jsonl"
viewed_files = set()

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
        except:
            continue
        
        if data.get('status') == 'DONE' and data.get('content'):
            match = re.search(r'File Path: `file:///([^`]+)`', data.get('content'))
            if match:
                viewed_files.add(match.group(1))

print("Files viewed:")
for vf in viewed_files:
    print(vf)
