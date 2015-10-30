var maximumQuant = 10;
var minimumQuant = 1;

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
  if (currentValue < maximumQuant) {
    var newValue = currentValue + 1;
    $(id).val(newValue);
  };
};

function minusOne(id) {
  var currentValue = parseInt($(id).val());
  if (currentValue > minimumQuant) {
    var newValue = currentValue - 1;
    $(id).val(newValue);
  };
};