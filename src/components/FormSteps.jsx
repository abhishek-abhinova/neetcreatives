import { FormInput, FormLabel, ServiceCard } from '../FormInputs';
import { SERVICE_OPTIONS } from '../data/site';

export function FormStep2Services({ form, toggleService, hasService }) {
  return (
    <div>
      {SERVICE_OPTIONS.map((service) => (
        <ServiceCard
          key={service}
          service={service}
          isSelected={hasService(service)}
          onSelect={() => toggleService(service)}
        />
      ))}
    </div>
  );
}