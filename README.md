[ ] The user can enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format owner/repo-name, e.g. facebook/react.

[ ] If the repository does not exist, the user should see a proper error message.

[ ] The user should be able to see the following information for each issue:

Issue Title * Number of the issue
Owner of the Issue
Owner Avatar * How long ago the issue was created in a human-friendly format (e.g. 2 days ago)
Body of the Issue
Label - note the color as returned by the API.
State of Issue (Open/Closed).
The user should be able to see multiple pages of results, by clicking a pagination control.

[ ] The user should be able to see the body of the issue rendered in markdown.
[ ] The user should be able to create a new issue via a modal for the repository, by clicking on a "new issue" button. Clicking on this button will pop open a modal that asks for the requisite fields.
[ ] If there is an error creating the issue (for example, the user not supplying all required parameters), there should be a nice error message to the user.

[ ] The user can see more details (including comments!) in a modal that's opened by clicking on the title of the issue.

[ ] The user, upon opening this modal, can add a comment via a textarea at the bottom of the page.
[ ] The user, upon opening the modal, can close the issue. If the person does not have the appropriate access to close an issue, the user sees a nicely formatted error message.
[ ] The user can see reactions attached to each comment (Reactions API).
[ ] The user can add reactions to a comment (API documentation).

[ ] Input Fuzzy Matching: the user should be able to type in either https://github.com/facebook/react or facebook/react, BOTH should work.

[ ] Instead of using Modal to show issue, use React Router (link) to navigate to different URL issues/:issueId to display the full issue. Have the Back button to go back to the previous page (from the individual issue page).