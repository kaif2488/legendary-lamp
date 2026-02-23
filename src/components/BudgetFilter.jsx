export const budgetFilters = [
    { value: "all", label: "All Budget Ranges", min: 0, max: null },
    { value: "0-200000", label: "$0 - $200,000", min: 0, max: 200000 },
    { value: "200001-400000", label: "$200,001 - $400,000", min: 200001, max: 400000 },
    { value: "400001-600000", label: "$400,001 - $600,000", min: 400001, max: 600000 },
    { value: "600001-800000", label: "$600,001 - $800,000", min: 600001, max: 800000 },
    { value: "800001-1000000", label: "$800,001 - $1,000,000", min: 800001, max: 1000000 },
];

const BudgetFilter = ({ value, onChange }) => {
    return (
        <div className="budget-filter-area">
            <select
                className="budget-select"
                value={value}
                onChange={onChange}
                aria-label="Filter by budget"
            >
                {budgetFilters.map((range) => (
                    <option key={range.value} value={range.value}>
                        {range.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BudgetFilter;
