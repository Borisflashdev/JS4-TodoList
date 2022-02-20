const userInput = document.getElementById('user-input');
const listBox = document.getElementById('list-holder');
const errorMessage = document.getElementById('error-div');

const addItemBtn = document.querySelector('button');
const clearItemsBtn = document.getElementById('clear-items-btn');

const AddItemHandler = () => {
    if (userInput.value === '') {
        errorMessage.classList = 'error-message-s border border-1 border-danger rounded-3 mt-4';
    } else {
        errorMessage.classList = 'error-message-h border border-1 border-danger rounded-3 mt-4';
        const nameList = userInput.value;
        listBox.innerHTML += `<div id="list-otp" class="list-div mb-5 fs-5"><span class="" >${nameList}</span>
        <div class="opt-buttons pt-1">
        <i id="xmark-btn" class="fa-solid fa-circle-xmark"></i>
        <i id="pen-btn" class="fa-solid fa-pen-to-square ms-2 me-2"></i>
        <i id="check-btn" class="fa-solid fa-circle-check"></i>
        </div>
        </div>`
        userInput.value = '';
        const cancleBtn = document.getElementById('xmark-btn');
        const checkBtn = document.getElementById('check-btn');
        const penBtn = document.getElementById('pen-btn');
        const listOtp = document.getElementById('list-otp');
        const span = document.querySelector('span');
        
        const cancleHandler = () => {
            listOtp.classList = 'hidden';
        }; 
        cancleBtn.addEventListener('click', cancleHandler);


        const checkHandler = () => {
            span.classList.toggle('finish');
        };
        checkBtn.addEventListener('click', checkHandler);

        const penHandler = () => {
            const name2 = nameList;
            userInput.value = name2;
            listOtp.classList = 'hidden';
        };
        penBtn.addEventListener('click', penHandler);
    }
};

const clearItemsHandler = () => {
    if (listBox.innerHTML === '') {
        return;
    } else {
        listBox.innerHTML = '';
    }
};

const errorMessageHandler = () => {
    errorMessage.classList = 'error-message-h border border-1 border-danger rounded-3 mt-4';
};

addItemBtn.addEventListener('click', AddItemHandler);
clearItemsBtn.addEventListener('click', clearItemsHandler);
errorMessage.addEventListener('click', errorMessageHandler);