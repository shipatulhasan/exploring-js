// Wood quantity for table, chair and bed
// per chair = 3 cft
// per table = 10 cft
// per bed = 50 cft

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const woodPerChair = 3
    const woodPerTable = 10
    const woodPerBed = 50

    const chairWood = woodPerChair*chairQuantity
    const tableWood = woodPerTable*tableQuantity
    const bedWood = woodPerBed*bedQuantity

    const totalWood = chairWood + tableWood + bedWood

    return {
        'Wood needed for chair ':chairWood,
        'Wood needed for table ':tableWood,
        'Wood needed for bed ':bedWood,
        'Total wood needed for funtinures ':totalWood

    }
}
const furnitures = woodCalculator(1, 2, 1)
console.log(furnitures)