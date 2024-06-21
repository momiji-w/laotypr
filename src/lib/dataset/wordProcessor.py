import json

file = open("lao-word.csv", "r", encoding="utf-8").read().split("\n")

data = []
for i in file:
    item = i.split(",")
    if len(item) > 1:
        if item[1] == "":
            continue
        data.append(i.split(",")[1])

json.dump(data, open("./wordData.json", "w", encoding="utf-8"), ensure_ascii=False, indent=4)
