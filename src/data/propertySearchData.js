const propertySearchData = [
    { id: 1, name: "Lakeview Studio Apartment", price: 120000 },
    { id: 2, name: "Maple Residency 2BHK", price: 260000 },
    { id: 3, name: "City Center Premium Flat", price: 390000 },
    { id: 4, name: "Palm Grove Family Home", price: 520000 },
    { id: 5, name: "Skyline Penthouse", price: 780000 },
    { id: 6, name: "Heritage Villa Estate", price: 980000 },
];

export const budgetRanges = [
    { value: "all", label: "All Budget Ranges", min: 0, max: null },
    { value: "0-200000", label: "$0 - $200,000", min: 0, max: 200000 },
    { value: "200001-400000", label: "$200,001 - $400,000", min: 200001, max: 400000 },
    { value: "400001-600000", label: "$400,001 - $600,000", min: 400001, max: 600000 },
    { value: "600001-800000", label: "$600,001 - $800,000", min: 600001, max: 800000 },
    { value: "800001-1000000", label: "$800,001 - $1,000,000", min: 800001, max: 1000000 },
];

export default propertySearchData;
