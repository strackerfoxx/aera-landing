with open('components/site.tsx', 'r') as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if 'function AppointmentDetailScreenshot' in line:
            start = i
            break
    end = start + 20
    for i in range(start, end):
        print(f"{i+1}: {lines[i]}", end='')
