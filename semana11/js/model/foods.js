function load(newFoods) {
    localStorage.setItem('foods-app:foods', JSON.stringify(newFoods));
}

function readAll() {
    const stringFood = localStorage.getItem('foods-app:foods');
    return JSON.parse(stringFood);
}

function nextId() {
    const foods = readAll();
    const ids = foods.map((food) => food.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
}

function create(food) {
    let id = nextId();
    food = { id: id, ...food };
    const foods = readAll();
    const newFoods = [...foods, food];

    load(newFoods);
    return food;
}

export default { load, readAll, create };