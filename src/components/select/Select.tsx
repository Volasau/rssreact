import './select.css';

interface SelectProps {
  selectedLimit: number;
  handleLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  selectedLimit,
  handleLimitChange,
}) => (
  <div className="select__limit">
    <label>
      <select onChange={handleLimitChange} value={selectedLimit}>
        <option value={10}>10</option>
        <option value={60}>All</option>
      </select>
    </label>
  </div>
);

export default Select;
