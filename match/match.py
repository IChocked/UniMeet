import json

# Get the userID and University name
USER_ID = "UID3"  # TODO: connect to db
USER_UNI = "UCLA"  # TODO: connect to db


def main():
    # open the file
    with open("data.json", "r") as read_file:  # TODO: connect to db
        data = json.load(read_file)

    # provided data from the user: interests, name, [previous matches]
    user_data = data["Universities"][USER_UNI][USER_ID]

    # all users of the university
    uni_users = data["Universities"][USER_UNI]

    # Keep track of points for each user
    match_points = {}

    print(user_data["PreviousMatches"])

    max_user = -1
    user_ids = []
    for i in uni_users:
        max_user += 1
        user_ids.append(i)
    print(max_user)

    """
    This function loops over the data of user's university and 
    assigns points for each of the other users 
    """

    def match():
        points = 0  # increment when interests match
        for user in uni_users:  # loop over the whole json file. i is user id
            if USER_ID != user:  # exclude main user's data for the next loop
                # check if previously matched
                matched_before = previously_matched(user)
                if not matched_before:
                    print("not matched")
                    # loop over the other user's interests
                    for j in data["Universities"][USER_UNI][user]["Interests"]:
                        # check if interests match
                        try:
                            if user_data["Interests"][j] == 1 and uni_users[user]["Interests"][j] == 1:
                                print("H", data["Universities"][USER_UNI][user]["Interests"][j])
                                points += 1
                        except KeyError:
                            pass

                    # Assign points for each user in the uni
                    match_points[user] = points
        print("This", match_points)

    # TODO: create this function
    def find_the_best_match():
        for index in match_points:
            pass

    """
    Checks if users matched before
    """
    def previously_matched(user_id):
        print("user id", user_id)
        for n in range(max_user):
            try:
                if user_data["PreviousMatches"][str(n)] == user_id:
                    return True
            except KeyError:
                print(Exception)
        return False

    match()

    # TODO: create a function that updates the PreviousMatches after users match


main()
