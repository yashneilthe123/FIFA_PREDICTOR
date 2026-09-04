import Select from "react-select";

function TeamDropdown({ teams, value, onChange, label }) {

    const options = teams.map(team => ({
        value: team,
        label: team
    }));

    const selectedOption = options.find(
        option => option.value === value
    ) || null;

    return (
        <div className="w-96 mb-6 mx-auto">

            <label className="block text-white text-xl font-semibold mb-2">
    {label}
</label>

            <Select
                options={options}
                value={selectedOption}
                onChange={(selected) => onChange({
                    target: {
                        value: selected ? selected.value : ""
                    }
                })}
                placeholder="Search a team..."

                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: "#1e293b",
                        borderColor: "#3b82f6",
                        color: "white"
                    }),
                    menu: (base) => ({
                        ...base,
                        backgroundColor: "#1e293b"
                    }),
                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                            ? "#2563eb"
                            : "#1e293b",
                        color: "white"
                    }),
                    singleValue: (base) => ({
                        ...base,
                        color: "white"
                    }),
                    input: (base) => ({
                        ...base,
                        color: "white"
                    })
                }}
            />

        </div>
    );
}

export default TeamDropdown;