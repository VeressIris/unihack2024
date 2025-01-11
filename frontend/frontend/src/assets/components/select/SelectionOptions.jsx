
import Dropdown from "../../../assets/components/dropdown";

const SelectionOptions = ({
  domainOptions,
  classOptions,
  phaseOptions,
  onSelectDomain,
  onSelectClass,
  onSelectPhase,
}) => {
  return (
    <div className="flex flex-row items-center space-x-4 mt-10">
      <Dropdown options={domainOptions} label="Selectează domeniul" onSelect={onSelectDomain} />
      <Dropdown options={classOptions} label="Selectează clasa" onSelect={onSelectClass} />
      <Dropdown options={phaseOptions} label="Selectează etapa" onSelect={onSelectPhase} />
    </div>
  );
};

export default SelectionOptions;
