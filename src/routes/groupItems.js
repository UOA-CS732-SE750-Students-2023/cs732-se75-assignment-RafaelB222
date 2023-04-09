export function groupItems(items) {
    //Separate the items in the cart into groups of items with the same name
    const groupedItems = [];
    items.forEach(item => {
        const group = groupedItems.find(g => g.item.name === item.name);
        if (group) {
            group.count++;
        }
        else {
            groupedItems.push({ item, count: 1 });
        }
    });
    return groupedItems;
}