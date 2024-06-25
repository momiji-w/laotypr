import json

file = open("raw-words.txt", "r", encoding="utf-8").read().split("\n")

data = []
for i in file:
    if i != "":
        data.append(i)

data = list(set(data))

assert len(data) == 150

json.dump(data, open("./wordData.json", "w", encoding="utf-8"), ensure_ascii=False, indent=4)
