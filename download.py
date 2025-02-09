from urllib.request import urlretrieve
import json

with open('./calender.json', 'r') as file:
    data = json.load(file)

url_list = []
#  collecting URLs from json
for eachDay in data['weeklySchedule']:
    url_list.append(eachDay['imageUrl'])

# Simplified second part - no need for nested loop
for i, url in enumerate(url_list):
    file_name = f'image{i+1}.jpg'
    # download link
    path, headers = urlretrieve(url, file_name)
    print(f'image {i+1} downloaded')