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
  if (currentValue < 10) {
    var newValue = currentValue + 1;
    $(id).val(newValue);
  };
};

function minusOne(id) {
  var currentValue = parseInt($(id).val());
  if (currentValue > 1) {
    var newValue = currentValue - 1;
    $(id).val(newValue);
  };
};