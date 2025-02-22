// Adding account rows

$(function () {

    // Start counting from the third row
    var counter = 2;

    $("#insertRow").on("click", function (event) {
        event.preventDefault();

        var newRow = $("<tr>");
        var cols = '';

        // Table columns
        cols += '<th scrope="row">' + counter + '</th>';
        cols += '<td><input class="form-control rounded-0" type="text" name="firstname" placeholder="Account Name"></td>';
        cols += '<td><input class="form-control rounded-0" type="number" name="lastname" placeholder="Balance"></td>';
        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        $("table").append(newRow);

        // Increase counter after each row insertion
        counter++;
    });

    // Remove row when delete btn is clicked
    $("table").on("click", "#deleteRow", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });
});

//Buttons
function profileButton() {
    location.href = "/addaccount.html"
}
function contributionButton() {
    location.href = "/monthlycont.html"
}
function dashboardButton() {
    location.href = "/profile.html"
}

//Redirect click on icon to welcome page
function homeIconClick() {
    location.href = "/welcome.html"
}