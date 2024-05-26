import Image from 'next/image';

import { ConeCard } from '@/components/ConeCard';

const coneTypes = {
  Type1: {
    Location: 'Paracentral ou Pericentral',
    RelationBetweenAxes: 'Refrativo, topográfico e coma coincidente (≤ 30º)',
    AstigmaticOrthogonality: 'Irregular',
    AstigmaticSymmetry: 'Simétrico',
    TopographicAspect: 'Croissant',
    PrimaryCriteriaForImplantSelection: ['Astigmatismo topográfico ou refrativo (o que for maior)'],
    ImplantSelection: {
      NoOfSegmentsArcs: '1 (160º) ou 2 (160º + 90º)',
      AxisOfImplantation: 'Topográfico plano',
      OpticalZone: ['K2 ≥ 52D = 5mm', 'K2 ≤ 51D = 6mm'],
      Symmetrical: {
        AstigmatismD: [
          { Range: '≤ 2.5D', ArcImplantThickness: '160/150 µm' },
          { Range: '2.5 ~ 3.5D', ArcImplantThickness: '160/200 µm' },
          { Range: '3.5 ~ 4.5D', ArcImplantThickness: '160/250 µm' },
          { Range: '4.5 ~ 5.5D', ArcImplantThickness: '160/300 µm' },
          { Range: '5.5 ~ 6.5D', ArcImplantThickness: '160/300 µm + 90/150 µm' },
          { Range: '6.5 ~ 8D', ArcImplantThickness: '160/300 µm + 90/200 µm' },
          { Range: '> 8D', ArcImplantThickness: '160/300 µm + 90/250 µm' },
        ],
      },
    },
  },
  Type2: {
    Location: 'Paracentral',
    RelationBetweenAxes: 'Refrativo plano e coma não coincidente (>30 <60)',
    AstigmaticOrthogonality: 'Irregular',
    AstigmaticSymmetry: 'Assimétrico',
    TopographicAspect: 'Duck',
    VariablesForImplantSelection: [
      'Ceratometria média',
      'Magnitude do astigmatismo',
      'Relação entre os eixos diagnósticos',
    ],
    ImplantSelection: {
      'MeanKeratometry<52D': {
        ImplantSegments: [
          { AstigmatismD: '≤ 4D', ArcImplantThickness: 'AS5 150/250 µm' },
          { AstigmatismD: '4 ~ 6D', ArcImplantThickness: 'AS5 200/300 µm' },
          { AstigmatismD: '> 6D', ArcImplantThickness: 'AS5 200/300 µm + SI5 120/200 µm' },
        ],
        AxisOfImplantation: [
          'Se o eixo refrativo coincidir com o eixo topográfico plano, escolha o eixo bissetor destes.',
          'Se o eixo refrativo coincidir com o eixo de coma, escolha o eixo bissetor destes.',
        ],
      },
      'MeanKeratometry>52D': {
        ImplantSegments: [
          { MeanKeratometryD: '52 ~ 54D', ArcImplantThickness: 'AS5 330 150/250 µm' },
          { MeanKeratometryD: '≥ 55D', ArcImplantThickness: 'AS5 330 200/300 µm' },
        ],
        AxisOfImplantation: 'Centro do arco alinhado ao eixo de coma',
      },
    },
  },
  Type3: {
    Location: 'Paracentral ou Pericentral',
    RelationBetweenAxes: 'Topográfico e coma perpendicular',
    AstigmaticOrthogonality: 'Regular',
    AstigmaticSymmetry: 'Assimétrico',
    TopographicAspect: 'Boneco de neve',
    SubTypes: {
      '3A': {
        Description: 'Eixo refrativo plano e eixo topográfico plano coincidente',
        ImplantSelection: {
          'MeanKeratometry<52D': {
            ImplantSegments: [
              { AstigmatismD: '≤ 4D', ArcImplantThickness: '2x AS5 160 150/250 µm (C e W)' },
              { AstigmatismD: '> 4D', ArcImplantThickness: '2x AS5 160 200/300 µm (C e W)' },
            ],
            AxisOfImplantation: 'Topográfico plano',
          },
          'MeanKeratometry>52D': {
            ImplantSegments: [
              { MeanKeratometryD: '52 ~ 54D', ArcImplantThickness: 'AS5 330 150/250 µm' },
              { MeanKeratometryD: '> 54D', ArcImplantThickness: 'AS5 330 200/300 µm' },
            ],
            AxisOfImplantation: 'Topográfico íngreme',
          },
        },
      },
      '3B': {
        Description: 'Eixo refrativo plano e eixo topográfico plano perpendicular',
        ImplantSelection: {
          PrimaryCriteria: ['Magnitude e eixo de coma'],
          AxisOfImplantation: 'Eixo de coma',
          'Comaμm(5mm)': [
            { Range: '≤ 1.5 µm', ArcImplantThickness: 'SI5 210/200 µm' },
            { Range: '1.5 ~ 2.5 µm', ArcImplantThickness: 'SI5 210/250 µm' },
            { Range: '> 2.5 µm', ArcImplantThickness: 'SI5 210/300 µm' },
          ],
        },
      },
    },
  },
  Type4: {
    Location: 'Central',
    RelationBetweenAxes: 'Não-determinante',
    AstigmaticOrthogonality: 'Irregular',
    AstigmaticSymmetry: 'Não-determinado',
    TopographicAspect: 'Mamilo',
    PrimaryCriteriaForImplantSelection: ['Ceratometria média', 'Equivalente esférico da refração'],
    ImplantSelection: {
      'BCVA≥20/40': 'Usar o equivalente esférico',
      'BCVA<20/40': 'Usar a ceratometria média',
      SymmetricalSegment: '325º a 5mm OZ',
      AxisOfImplantation: '270º (inferior)',
      SphericalEquivalentD_MeanKeratometryD: [
        { Range: '2 ~ 4D, < 48D', ArcImplantThickness: 'SI5 325/150 µm' },
        { Range: '4 ~ 6D, 48 ~ 50D', ArcImplantThickness: 'SI5 325/200 µm' },
        { Range: '6 ~ 8D, 50 ~ 52D', ArcImplantThickness: 'SI5 325/250 µm' },
        { Range: '> 8D, > 52D', ArcImplantThickness: 'SI5 325/300 µm' },
      ],
    },
  },
  Type5: {
    Location: 'Central',
    RelationBetweenAxes: 'Refrativo e topográfico coincidente, coma não-determinante',
    AstigmaticOrthogonality: 'Regular',
    AstigmaticSymmetry: 'Simétrico',
    TopographicAspect: 'Gravata-borboleta',
    PrimaryCriteriaForImplantSelection: ['Magnitude e eixo do astigmatismo', 'Ceratometria e refração'],
    ImplantSelection: {
      Astigmatism: [
        { Range: '≤ 4D', ImplantThickness: '150 µm' },
        { Range: '4 ~ 6D', ImplantThickness: '200 µm' },
        { Range: '6 ~ 8D', ImplantThickness: '250 µm' },
        { Range: '> 8D', ImplantThickness: '300 µm' },
      ],
      'Myopia≤3D_Or_MeanKeratometry≤52D': {
        Implant: 'Um AS5 150/250/150 µm implante de espessura sinusoidal conforme mostrado',
      },
      'Myopia>3D_Or_MeanKeratometry>52D': {
        Implant: 'Um AS5 200/300/200 µm implante de espessura sinusoidal conforme mostrado',
      },
      AxisOfImplantation: 'Topográfico íngreme',
    },
  },
};

export default function HomePage() {
  const { Type1, Type2 } = coneTypes;
  return (
    <div className="container mx-auto p-4 py-12 space-y-12">
      <h1 className="text-2xl font-bold text-center mb-8">Nomograma Keraring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ConeCard.Root>
          <ConeCard.Image src="/Type1.png" alt={Type1.TopographicAspect} />
          <div className="space-y-4">
            <ConeCard.Title title={Type1.TopographicAspect} />
            <ConeCard.Criteria title="Critérios primários">
              <ul>
                {Type1.PrimaryCriteriaForImplantSelection.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </ConeCard.Criteria>
            <ConeCard.Summary
              astigmaticOrthogonality={Type1.AstigmaticOrthogonality}
              astigmaticSymmetry={Type1.AstigmaticSymmetry}
              location={Type1.Location}
              relationBetweenAxes={Type1.RelationBetweenAxes}
            />
            <div>
              <div className="overflow-x-auto">
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Nº de segmentos</th>
                      <th>Eixo de implantação</th>
                      <th>Zona óptica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{Type1.ImplantSelection.NoOfSegmentsArcs}</td>
                      <td>{Type1.ImplantSelection.AxisOfImplantation}</td>
                      <td>
                        {Type1.ImplantSelection.OpticalZone.map((zone) => (
                          <p key={zone}>{zone}</p>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-2 card card-bordered card-compact">
              <div className="card-body">
                <figure className="justify-center flex">
                  <Image src="/Type1.1.png" alt={Type1.TopographicAspect} width={100} height={100} />
                </figure>
                <div className="overflow-x-auto">
                  <table className="table table-xs">
                    <thead>
                      <tr>
                        <th>Cilindro (D)</th>
                        <th>Arco / espessura</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Type1.ImplantSelection.Symmetrical.AstigmatismD.map(
                        (ast, index) =>
                          index <= 3 && (
                            <tr key={ast.Range}>
                              <td>{ast.Range}</td>
                              <td>{ast.ArcImplantThickness}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-body">
                <figure className="justify-center flex">
                  <Image src="/Type1.2.png" alt={Type2.TopographicAspect} width={100} height={100} />
                </figure>
                <div className="overflow-x-auto">
                  <table className="table table-xs">
                    <thead>
                      <tr>
                        <th>Cilindro (D)</th>
                        <th>Arco / espessura</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Type1.ImplantSelection.Symmetrical.AstigmatismD.map(
                        (ast, index) =>
                          index > 3 && (
                            <tr key={ast.Range}>
                              <td>{ast.Range}</td>
                              <td>{ast.ArcImplantThickness}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </ConeCard.Root>
        <div className="gap-4 card card-bordered card-compact h-fit">
          <div className="card-body">
            <div className="flex justify-center">
              <Image src="/Type2.png" alt={Type2.TopographicAspect} width={250} height={250} />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{Type2.TopographicAspect}</h2>
              <div className="text-center py-8">
                <strong className="">Variáveis para seleção do implante</strong>
                <ul>
                  {Type2.VariablesForImplantSelection.map((variable) => (
                    <li key={variable}>{variable}</li>
                  ))}
                </ul>
              </div>
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
                      <td>2</td>
                      <td>{Type2.Location}</td>
                      <td>{Type2.RelationBetweenAxes}</td>
                      <td>{Type2.AstigmaticOrthogonality}</td>
                      <td>{Type2.AstigmaticSymmetry}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="card card-bordered card-compact">
                  <div className="card-body">
                    <Image
                      src="/Type2.1.png"
                      alt={Type2.TopographicAspect}
                      width={110}
                      height={50}
                      className="mx-auto"
                    />
                    <div className="overflow-x-auto">
                      <table className="table table-xs">
                        <caption className="table-caption">Ceratometria média &lt;52D</caption>
                        <thead>
                          <tr>
                            <th>Cilindro (D)</th>
                            <th>Arco / espessura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Type2.ImplantSelection['MeanKeratometry<52D'].ImplantSegments.map((segment) => (
                            <tr key={segment.AstigmatismD}>
                              <td>{segment.AstigmatismD}</td>
                              <td>{segment.ArcImplantThickness}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-xs italic text-center">
                      <strong>
                        <h4>Eixo de implantação</h4>
                      </strong>
                      {Type2.ImplantSelection['MeanKeratometry<52D'].AxisOfImplantation.map((axis) => (
                        <p key={axis}>{axis}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card card-bordered card-compact">
                  <div className="card-body">
                    <Image
                      src="/Type2.2.png"
                      alt={Type2.TopographicAspect}
                      width={110}
                      height={50}
                      className="mx-auto"
                    />

                    <div className="overflow-x-auto">
                      <table className="table table-xs">
                        <caption className="table-caption">Ceratometria média &gt;52D</caption>
                        <thead>
                          <tr>
                            <th>Ceratometria média (D)</th>
                            <th>Arco / espessura</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Type2.ImplantSelection['MeanKeratometry>52D'].ImplantSegments.map((segment) => (
                            <tr key={segment.MeanKeratometryD}>
                              <td>{segment.MeanKeratometryD}</td>
                              <td>{segment.ArcImplantThickness}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="text-xs italic text-center">
                      <strong>
                        <h4>Eixo de implantação</h4>
                      </strong>
                      <p>{Type2.ImplantSelection['MeanKeratometry>52D'].AxisOfImplantation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
