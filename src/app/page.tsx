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
          { Range: '52 ~ 54D', ArcImplantThickness: 'AS5 330 150/250 µm' },
          { Range: '≥ 55D', ArcImplantThickness: 'AS5 330 200/300 µm' },
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
              { Range: '52 ~ 54D', ArcImplantThickness: 'AS5 330 150/250 µm' },
              { Range: '> 54D', ArcImplantThickness: 'AS5 330 200/300 µm' },
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
        { SphericalEquivalentD: '2 ~ 4D', MeanKeratometryD: '< 48D', ArcImplantThickness: 'SI5 325/150 µm' },
        { SphericalEquivalentD: '4 ~ 6D', MeanKeratometryD: '48 ~ 50D', ArcImplantThickness: 'SI5 325/200 µm' },
        { SphericalEquivalentD: '6 ~ 8D', MeanKeratometryD: '50 ~ 52D', ArcImplantThickness: 'SI5 325/250 µm' },
        { SphericalEquivalentD: '> 8D', MeanKeratometryD: '> 52D', ArcImplantThickness: 'SI5 325/300 µm' },
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
  const { Type1, Type2, Type3, Type4, Type5 } = coneTypes;

  return (
    <div className="container mx-auto p-4 py-12 space-y-12">
      <h1 className="text-2xl font-bold text-center mb-8">Nomograma Keraring</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Type 1 */}
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
        </ConeCard.Root>

        {/* Type 2 */}
        <ConeCard.Root>
          <ConeCard.Image src="/Type2.png" alt={Type2.TopographicAspect} />
          <div className="space-y-4">
            <ConeCard.Title title={Type2.TopographicAspect} />
            <ConeCard.Criteria title="Variáveis para seleção do implante">
              <ul>
                {Type2.VariablesForImplantSelection.map((variable) => (
                  <li key={variable}>{variable}</li>
                ))}
              </ul>
            </ConeCard.Criteria>
            <ConeCard.Summary
              astigmaticOrthogonality={Type2.AstigmaticOrthogonality}
              astigmaticSymmetry={Type2.AstigmaticSymmetry}
              location={Type2.Location}
              relationBetweenAxes={Type2.RelationBetweenAxes}
            />
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <caption>Ceratometria média &lt;52D</caption>
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
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <caption>Ceratometria média &gt;52D</caption>
                <thead>
                  <tr>
                    <th>Ceratometria média (D)</th>
                    <th>Arco / espessura</th>
                  </tr>
                </thead>
                <tbody>
                  {Type2.ImplantSelection['MeanKeratometry>52D'].ImplantSegments.map((segment) => (
                    <tr key={segment.Range}>
                      <td>{segment.Range}</td>
                      <td>{segment.ArcImplantThickness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ConeCard.Root>

        {/* Type 3 */}
        <ConeCard.Root>
          <ConeCard.Image src="/Type3.png" alt={Type3.TopographicAspect} />
          <div className="space-y-4">
            <ConeCard.Title title={Type3.TopographicAspect} />
            <ConeCard.Criteria title="Subtipos de cone tipo 3">
              <ul>
                <li>3A - Eixo refrativo e topográfico coincidente</li>
                <li>3B - Eixo refrativo e topográfico perpendicular</li>
              </ul>
            </ConeCard.Criteria>
            <ConeCard.Summary
              astigmaticOrthogonality={Type3.AstigmaticOrthogonality}
              astigmaticSymmetry={Type3.AstigmaticSymmetry}
              location={Type3.Location}
              relationBetweenAxes={Type3.RelationBetweenAxes}
            />
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <caption>Implantes para cone 3A</caption>
                <thead>
                  <tr>
                    <th>Cilindro (D)</th>
                    <th>Arco / espessura</th>
                  </tr>
                </thead>
                <tbody>
                  {Type3.SubTypes['3A'].ImplantSelection['MeanKeratometry<52D'].ImplantSegments.map((segment) => (
                    <tr key={segment.AstigmatismD}>
                      <td>{segment.AstigmatismD}</td>
                      <td>{segment.ArcImplantThickness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ConeCard.Root>

        {/* Type 4 */}
        <ConeCard.Root>
          <ConeCard.Image src="/Type4.png" alt={Type4.TopographicAspect} />
          <div className="space-y-4">
            <ConeCard.Title title={Type4.TopographicAspect} />
            <ConeCard.Criteria title="Critérios primários para seleção de implante">
              <ul>
                {Type4.PrimaryCriteriaForImplantSelection.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </ConeCard.Criteria>
            <ConeCard.Summary
              astigmaticOrthogonality={Type4.AstigmaticOrthogonality}
              astigmaticSymmetry={Type4.AstigmaticSymmetry}
              location={Type4.Location}
              relationBetweenAxes={Type4.RelationBetweenAxes}
            />
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>Sph. Eq. (D)</th>
                    <th>Ceratometria média (D)</th>
                    <th>Arco / espessura</th>
                  </tr>
                </thead>
                <tbody>
                  {Type4.ImplantSelection.SphericalEquivalentD_MeanKeratometryD.map((selection) => (
                    <tr key={selection.SphericalEquivalentD}>
                      <td>{selection.SphericalEquivalentD}</td>
                      <td>{selection.MeanKeratometryD}</td>
                      <td>{selection.ArcImplantThickness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ConeCard.Root>

        {/* Type 5 */}
        <ConeCard.Root>
          <ConeCard.Image src="/Type5.png" alt={Type5.TopographicAspect} />
          <div className="space-y-4">
            <ConeCard.Title title={Type5.TopographicAspect} />
            <ConeCard.Criteria title="Critérios primários para seleção de implante">
              <ul>
                {Type5.PrimaryCriteriaForImplantSelection.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </ConeCard.Criteria>
            <ConeCard.Summary
              astigmaticOrthogonality={Type5.AstigmaticOrthogonality}
              astigmaticSymmetry={Type5.AstigmaticSymmetry}
              location={Type5.Location}
              relationBetweenAxes={Type5.RelationBetweenAxes}
            />
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>Cilindro (D)</th>
                    <th>Arco / espessura</th>
                  </tr>
                </thead>
                <tbody>
                  {Type5.ImplantSelection.Astigmatism.map((ast) => (
                    <tr key={ast.Range}>
                      <td>{ast.Range}</td>
                      <td>{ast.ImplantThickness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ConeCard.Root>
      </div>

      {/* Seção de Informações Complementares */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Informações Complementares</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>
            <strong>Classificação Alfonso:</strong> Define cinco tipos de ceratocone com base em parâmetros tomográficos
            e outros critérios.
          </li>
          <li>
            <strong>Tomografia Corneana:</strong> Análise de múltiplas variáveis, como curvatura axial e elevação
            anterior e posterior, é essencial para o planejamento cirúrgico.
          </li>
          <li>
            <strong>Aberrometria:</strong> Magnitude e eixo do coma devem ser considerados na escolha do implante.
          </li>
          <li>
            <strong>Técnicas Cirúrgicas:</strong> Planejamento assistido por laser de femtosegundo ou dissecção mecânica
            deve seguir diretrizes específicas de profundidade e espessura da córnea.
          </li>
          <li>
            <strong>Ferramenta de Planejamento:</strong> O aplicativo Keraring Assistant ajuda no planejamento
            personalizado e oferece suporte ao cirurgião.
          </li>
        </ul>
      </section>
    </div>
  );
}
