export function groupItems(items) {
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