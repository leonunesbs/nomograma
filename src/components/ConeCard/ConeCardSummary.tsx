interface ConeCardSummaryProps {
  location: string;
  relationBetweenAxes: string;
  astigmaticOrthogonality: string;
  astigmaticSymmetry: string;
}

export function ConeCardSummary({
  location,
  relationBetweenAxes,
  astigmaticOrthogonality,
  astigmaticSymmetry,
}: ConeCardSummaryProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Tipo</th>
            <td>Localização</td>
            <td>Relação entre eixos</td>
            <td>Ortogonalidade</td>
            <td>Simetria</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{location}</td>
            <td>{relationBetweenAxes}</td>
            <td>{astigmaticOrthogonality}</td>
            <td>{astigmaticSymmetry}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
