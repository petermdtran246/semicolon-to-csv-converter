// Use the DOM to get the form and input/output textboxes
const converterForm = document.getElementById("converter-form");
const inputRecord = document.getElementById("inputRecord");
const outputRecord = document.getElementById("outputRecord");

converterForm.addEventListener("submit", function(event) {
    // Prevent the default form behavior so the page does not reload
    event.preventDefault();

    // Get the user's string and split it into an array at each semicolon
    let record = inputRecord.value;
    let fields = record.split(";");

    // Loop through the array to check and format each element
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        
        // Format rule: Escape any existing double quotes by doubling them
        field = field.replaceAll('"', '""');

        // Flow control: If the field has a comma (or quotes/line breaks), wrap the whole field in double quotes
        if (field.indexOf(",") !== -1 || field.indexOf('"') !== -1 ||
            field.indexOf("\n") !== -1 || field.indexOf("\r") !== -1) {
            field = '"' + field + '"';
        }

        // Put the updated field back into the array
        fields[i] = field;
    }
    
    //Join the array back into a single string using commas and display it on the page
    outputRecord.value = fields.join(",");
});







