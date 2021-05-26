
function calculate()
{
    var cart = document.getElementById('shopCart');
    console.log(cart);
    var total = 0;
    for(var i = 1; i < cart.rows.length; i++)
    {
        var price = cart.children[0].children[i].children[2].children[0];
        console.log(price);
        var number = cart.children[0].children[i].children[3].children[0];
        console.log(number);
        total += parseFloat(price.innerText.replace('HKD $ ', '')) * parseFloat(number.value);
    }
    var text = document.getElementsByClassName('tot')[0];
    text.innerHTML = '$' + total;
    return;
}

var change_number = document.getElementsByClassName('number');
for (var i = 0; i < change_number.length; i++)
{
    change_number[i].addEventListener('click', function(event)
    {
        calculate();
    })
}

var add_button = document.getElementsByClassName('add');
for (var i = 0; i < add_button.length; i++)
{
    add_button[i].addEventListener('click', function(event)
    {
        var addButton = event.target;
        var name = addButton.parentElement.children[2].innerText;
        console.log(name);
        var image = addButton.parentElement.children[0].src;
        console.log(image);
        var price = addButton.parentElement.children[3].children[0].innerText;
        console.log(price);
        var table_image = document.createElement("IMG");
        table_image.src = image;
        table_image.width = '100';
        table_image.height = '100';
        var table_first_row = document.createElement("TD");
        table_first_row.appendChild(table_image);
        var table_name = document.createElement("SPAN");
        table_name.innerText = name;
        var table_second_row = document.createElement("TD");
        table_second_row.appendChild(table_name);
        var table_price = document.createElement("SPAN");
        table_price.innerText = 'HKD $ ' + price;
        table_price.class = 'price';
        var table_third_row = document.createElement("TD");
        table_third_row.appendChild(table_price);
        var table_quantity = document.createElement("INPUT");
        table_quantity.value = '1';
        table_quantity.type = 'number';
        table_quantity.class = 'number';
        table_quantity.min = '1';
        table_quantity.addEventListener('click', function(event)
    {
        calculate();
    })
        var table_forth_row = document.createElement("TD");
        var delet_button = document.createElement("Button");
        delet_button.type = 'button';
        delet_button.innerText = 'Delete';
        delet_button.class = 'delet';
        delet_button.addEventListener('click', function(event)
    {
        var clickedButton = event.target;
        clickedButton.parentElement.parentElement.remove();
        calculate();
    })
        console.log(delet_button.class);
        table_forth_row.appendChild(table_quantity);
        table_forth_row.appendChild(delet_button);
        var table_row = document.createElement("TR");
        table_row.class = 'item';
        console.log(table_first_row);
        console.log(table_second_row);
        console.log(table_third_row);
        console.log(table_forth_row);
        table_row.appendChild(table_first_row);
        table_row.appendChild(table_second_row);
        table_row.appendChild(table_third_row);
        table_row.appendChild(table_forth_row);
        var cart = document.getElementById('shopCart');
        cart.children[0].appendChild(table_row);
        console.log(cart);
        calculate();
    })
}

var delete_Button = document.getElementsByClassName('delet');
console.log(delete_Button);
for (var i = 0; i < delete_Button.length; i++)
{
    delete_Button[i].addEventListener('click', function(event)
    {
        var clickedButton = event.target;
        clickedButton.parentElement.parentElement.remove();
        calculate();
    })
}

