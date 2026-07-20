with open('components/site.tsx', 'r') as f:
    lines = f.readlines()
    for i in range(259, 265):
        print(f"{i+1}: {lines[i]}", end='')
