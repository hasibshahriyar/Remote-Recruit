import json
import os
import re

transcript_path = r"C:\Users\shahr\.gemini\antigravity-ide\brain\40ae1f9e-52e4-42d4-a7bc-07d8ac49ac30\.system_generated\logs\transcript.jsonl"
out_path = r"C:\Users\shahr\Documents\Job\SG Services\Full stack Developer Technical Test -Last One\ReplicateAppLocally\extracted_index.tsx"

output_lines = []

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.parse(line)
        except:
            import json as j
            data = j.loads(line)
        
        # We look for the output of the view_file tool on index.tsx
        if data.get('status') == 'DONE' and data.get('content'):
            if "File Path: `file:///c:/Users/shahr/Documents/Job/SG%20Services/Full%20stack%20Developer%20Technical%20Test%20-Last%20One/Replicate%20App%20Locally/src/imports/RemoteRecruitFeatures-1/index.tsx`" in data.get('content'):
                content = data.get('content')
                # Lines look like "1: import React from 'react';"
                # We need to extract just the code
                for cl in content.split('\n'):
                    match = re.match(r'^\d+:\s?(.*)', cl)
                    if match:
                        output_lines.append(match.group(1))

with open(out_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(output_lines))

print("Extracted", len(output_lines), "lines")
