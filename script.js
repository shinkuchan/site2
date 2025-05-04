let mouseClicked = false

addEventListener('mousedown', function() {
    mouseClicked = true
})

addEventListener('mouseup', function() {
    mouseClicked = false
})

let grid = document.querySelector('.grid')

let grid_html = ''

for (let i = 0; i < 20; i += 1) {
    for (let j = 0; j < 20; j += 1) {
        grid_html += '<div class="cell"></div>'
    }
}

grid.innerHTML = grid_html;

let current_color = 'cell-red';
let color_list = ['cell-red', 'cell-yellow', 'cell-blue', 'cell-green', 'cell-purple']

for (let color of color_list) {
    let btn = document.querySelector('.tools .'+color)
    btn.addEventListener('click', function() {
        current_color = color
    })
}

let current_mode = 'pencil'
let mode_list = ['pencil', 'eraser', 'fill']

for (let mode of mode_list) {
    let btn = document.querySelector('.tools .cell-'+mode)
    btn.addEventListener('click', function() {
        current_mode = mode
    })
}

function cell_event(cell, color, mode) {
    if (current_mode == 'pencil') {
        cell.classList.remove(...color_list)
        cell.classList.add(color)
    }
    if (current_mode == 'eraser') {
        cell.classList.remove(...color_list)
    }
    if (current_mode == 'fill') {
        cell.classList.remove(...color_list)
        cell.classList.add(color)
    }
}

function cell_fill(cell, color, replace_color) {
    
}

let cells = document.querySelectorAll('.grid .cell')

for (let cell of cells) {
    cell.addEventListener('click', function() {
        cell_event(cell, current_color, current_mode)
    })

    cell.addEventListener('mouseenter', function() {
        if (mouseClicked) {
            cell_event(cell, current_color, current_mode)
        }
    })
}