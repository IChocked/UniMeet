import json


def main():
    # open the file
    with open("data.json", "r") as read_file:  # TODO: connect to db
        data = json.load(read_file)

    # Get the userID and University name
    user_id = "UID"  # TODO: connect to db
    user_uni = data["users"][user_id]["university"]
    # all users of the university
    uni_users = get_uni_users(data, user_id, user_uni)

    print(uni_users)
    uni_users = previously_matched(data, user_id, uni_users)
    print(uni_users)

    best_match = match(uni_users, user_id, data)

    update_data()
    print(best_match)


"""
Checks if users matched before
"""


def previously_matched(data, user_id, users):
    try:
        for m in data["users"][user_id]["Meetings"]:
            users.remove(m)
    except ValueError:
        pass

    return users


# """
# This function loops over the data of user's university and
# assigns points for each of the other users
#
# """
def match(users, id, data):
    user_points = {}
    points = 0  # increment when interests match
    index = 0
    user_interests = get_user_interests(data,id)
    for user in users: # i is another user
        for interest in user_interests:
            try:
                if interest == data["users"][user]["interests"][str(index)]:
                    points += 1
                user_points[user] = points
            except KeyError:
                pass

            index += 1
        index = 0
        points = 0
    print(user_points)

    our_match = find_the_best_match(user_points)

    return our_match


# Chooses the max value user that was calculated on match()
def find_the_best_match(u_points):
    highest_point = max(u_points,key=u_points.get)
    return highest_point


def get_uni_users(json_data, user_id, user_uni):
    users = []
    for user in json_data["users"]:
        if user != user_id:
            if json_data["users"][user]['university'] == user_uni:
                users.append(user)
    return users


def get_user_interests(data,user):
    max_interests = 0
    interests = []
    for _ in (data["users"][user]["interests"]):
        max_interests += 1

    for i in range(max_interests):
        interests.append(data["users"][user]["interests"][str(i)])
    print(interests)
    return interests


# Updates json data
def update_data():
    pass # TODO update data


main()

