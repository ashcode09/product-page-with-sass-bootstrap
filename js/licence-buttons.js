var maxItemQuantity = 10;
var minItemQuantity = 1;

$('#sbLessBtn').on("click", function() {
  minusOne('#sbQuantity');
});

$('#sbMoreBtn').on("click", function() {
  addOne('#sbQuantity');
});

$('#mbLessBtn').on("click", function() {
  minusOne('#mbQuantity');
});

$('#mbMoreBtn').on("click", function() {
  addOne('#mbQuantity');
});

function addOne(id) {
  var currentValue = parseInt($(id).val());
  if (currentValue < maxItemQuantity) {
    var newValue = currentValue + 1;
    $(id).val(newValue);
  };
};

function minusOne(id) {
  var currentValue = parseInt($(id).val());
  if (currentValue > minItemQuantity) {
    var newValue = currentValue - 1;
    $(id).val(newValue);
  };
};