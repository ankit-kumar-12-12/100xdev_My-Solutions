document.getElementById('addFieldButton').addEventListener('click', function () {
    const fieldType = document.getElementById('fieldType').value;
    const fieldLabel = document.getElementById('fieldLabel').value;

    if (fieldLabel.trim() === "") {
        alert("Please enter a field label.");
        return;
    }

    // Get the preview form
    const previewForm = document.getElementById('previewForm');

    // Create a new field based on the selected field type
    const fieldWrapper = document.createElement('div');
    fieldWrapper.classList.add('form-group');

    const label = document.createElement('label');
    label.innerText = fieldLabel;

    let fieldElement;
    switch (fieldType) {
        case 'text':
            fieldElement = document.createElement('input');
            fieldElement.type = 'text';
            break;

        case 'textarea':
            fieldElement = document.createElement('textarea');
            break;

        case 'select':
            fieldElement = document.createElement('select');
            const option1 = document.createElement('option');
            option1.value = 'option1';
            option1.innerText = 'Option 1';

            const option2 = document.createElement('option');
            option2.value = 'option2';
            option2.innerText = 'Option 2';

            fieldElement.appendChild(option1);
            fieldElement.appendChild(option2);
            break;
    }

    // Add the label and field element to the preview form
    fieldWrapper.appendChild(label);
    fieldWrapper.appendChild(fieldElement);
    previewForm.appendChild(fieldWrapper);

    // Clear the label input field after adding the field
    document.getElementById('fieldLabel').value = '';
});
