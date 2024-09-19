// Tooltip
const tooltipBtn = document.getElementById('tooltipBtn')
const tooltip = document.getElementById('tooltip')
tooltipBtn.addEventListener('mouseenter', () => {
  const rect = tooltipBtn.getBoundingClientRect()
  tooltip.style.top = `${rect.bottom + window.scrollY}px`
  tooltip.style.left = `${rect.left}px`
  tooltip.style.display = 'block'
})
tooltipBtn.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none'
})

// Popover
const popoverBtn = document.getElementById('popoverBtn')
const popover = document.getElementById('popover')
popoverBtn.addEventListener('click', () => {
  const rect = popoverBtn.getBoundingClientRect()
  popover.style.top = `${rect.bottom + window.scrollY}px`
  popover.style.left = `${rect.left}px`
  popover.style.display = popover.style.display === 'block' ? 'none' : 'block'
})

// Select Menu
const selectBtn = document.getElementById('selectBtn')
const selectOptions = document.getElementById('selectOptions')
selectBtn.addEventListener('click', () => {
  const rect = selectBtn.getBoundingClientRect()
  selectOptions.style.top = `${rect.bottom + window.scrollY - 200}px`
  selectOptions.style.left = `${rect.left}px`
  selectOptions.style.display =
    selectOptions.style.display === 'block' ? 'none' : 'block'
})

// Combobox
const comboboxInput = document.getElementById('comboboxInput')
const comboboxDropdown = document.getElementById('comboboxDropdown')
comboboxInput.addEventListener('focus', () => {
  comboboxDropdown.style.display = 'block'
})
comboboxInput.addEventListener('blur', () => {
  setTimeout(() => (comboboxDropdown.style.display = 'none'), 100)
})

// Dropdown Menu
const dropdownBtn = document.getElementById('dropdownBtn')
const dropdownMenu = document.getElementById('dropdownMenu')
dropdownBtn.addEventListener('click', () => {
  const rect = dropdownBtn.getBoundingClientRect()
  dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`
  dropdownMenu.style.left = `${rect.left}px`
  dropdownMenu.style.display =
    dropdownMenu.style.display === 'block' ? 'none' : 'block'
})

// Dialog
const openDialogBtn = document.getElementById('openDialogBtn')
const dialog = document.getElementById('dialog')
const closeDialogBtn = document.getElementById('closeDialogBtn')
openDialogBtn.addEventListener('click', () => {
  dialog.style.display = 'block'
  const rect = openDialogBtn.getBoundingClientRect()
  dialog.style.top = `${rect.bottom + window.scrollY}px`
  dialog.style.left = `${rect.left}px`
})
closeDialogBtn.addEventListener('click', () => {
  dialog.style.display = 'none'
})
