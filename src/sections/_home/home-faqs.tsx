import type { Variants } from "framer-motion";
import type { BoxProps } from "@mui/material/Box";

import { m } from "framer-motion";
import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { TrianglePattern } from "src/assets/illustrations/components/shape-pattern";

import { Iconify } from "src/components/iconify";
import { varFade, MotionViewport } from "src/components/animate";

// import BlurryBlob from "src/components/animata/background/blurry-blob";
import { MarketingContactInfo } from "../_filiais/contact/marketing-contact-info";

import { Divider } from "@/components/catalyst-ui-kit/typescript/divider";

// ----------------------------------------------------------------------

const FAQs = [
  {
    question: "Qual a diferença entre tributos, impostos e taxas?",
    answer: (
      <Typography>
        Conforme disposto no artigo 3º do Código Tributário Nacional (CTN),{" "}
        <strong>
          tributo é “toda prestação pecuniária compulsória, em moeda ou cujo valor nela se
          possa exprimir, que não constitua sanção de ato ilícito, instituída em lei e
          cobrada mediante atividade administrativa plenamente vinculada”.
        </strong>{" "}
        A CF em seus arts. 145, 149, 149-A, classifica os tributos pela{" "}
        <strong>
          Pentapartição (impostos, taxas, contribuições de melhoria, empréstimos
          compulsórios e contribuições especiais)
        </strong>
        . E o CTN em seu art. 5º segue a teoria da <strong>Tripartição</strong>(impostos,
        taxas e contribuições de melhoria): “Os tributos são impostos, taxas e
        contribuições de melhoria”. O imposto é considerado o tributo mais importante,
        estando disposto no artigo 16º do CTN, imposto “é o tributo cuja obrigação tem por
        fato gerador uma situação independente de qualquer atividade estatal específica,
        relativa ao contribuinte”. Dentre os principais impostos do Brasil, podemos citar:
        Imposto s/Circulação de Mercadorias e Serviços (ICMS), Imposto sobre a Propriedade
        de Veículos Automotores (IPVA), Imposto sobre a Propriedade Predial e Territorial
        Urbana (IPTU), Imposto sobre a Renda e Proventos de Qualquer Natureza (IR – pessoa
        física e jurídica), Imposto sobre Operações de Crédito (IOF), Imposto sobre
        Serviços de Qualquer Natureza (ISS). Já de acordo com o artigo 77º do CTN, taxa é
        um tributo “que tem como fato gerador o exercício regulador do poder de polícia,
        ou a utilização efetiva e potencial, de serviço público específico e divisível”. –
        Taxa de Emissão de Documentos (níveis municipais, estaduais e federais), Taxa de
        Licenciamento Anual de Veículo, Taxas do Registro do Comércio (Juntas Comerciais),
        Taxa cobrada para registro do Contrato Social de uma empresa.
        {/* <Link
          href="https://support.mui.com/hc/en-us/articles/360008775240-How-do-I-get-access-to-an-item-I-purchased"
          target="_blank"
          rel="noopener"
          sx={{ mx: 0.5 }}
        >
          updates
        </Link> */}
      </Typography>
    ),
  },
  {
    question: "Como faço para pagar menos imposto?",
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
        <Typography>Neste caso o ideal é: </Typography>
        <li>
          {" "}
          Analisar o melhor regime tributário que poderá ser feito à partir de uma
          Auditoria Fiscal com base nas informações prestadas aos órgãos federais,
          estaduais e/ou municipais.
        </li>
        <li>
          {" "}
          Marcar uma reunião presencial para conseguir entender as reais intenções dos
          empresários, bem como a rotina empresarial para uma melhor análise..
        </li>
        <li>
          <strong>Fase 3</strong>
        </li>
        <li>
          <strong>Fase 4</strong>
        </li>
        <li>
          Para mais dúvidas, entre em
          <Link href="#" target="_blank" rel="noopener" sx={{ mx: 0.5 }} color="info">
            contato
          </Link>
          .
        </li>
      </Box>
    ),
  },
  {
    question: "Como faço para pagar minha dívida Tributária? E como parcelar?",
    answer: (
      <Box component="ul" sx={{ pl: 3, listStyleType: "disc" }}>
        <li>
          {" "}
          O crédito tributário, já constituído, é impeditivo para emissão de Certidões
          Negativas de Débitos, certidões estas que são exigidas por alguns tomadores,
          podendo, inclusive inviabilizar a atividade da empresa. O Governo Federal,
          geralmente de dois em dois anos edita Leis que possibilitam o parcelamento dos
          débitos com benefícios, assim como os Estados e Municípios, ideal agendar uma
          reunião para estudarmos a melhor medida no momento. Uma análise da origem dos
          créditos tributários é crucial para saber a possibilidade, ou não, de revisão
          dos referidos créditos.
        </li>
      </Box>
    ),
  },
  {
    question: "O débito Tributário, prescreve?",
    answer: (
      <Typography>
        Sim. Necessário destacar que a prescrição é uma modalidade da extinção do crédito
        tributário disposto no art. 156, inciso V do CTN, sendo que, a partir do momento
        que ocorre a prescrição contra a Fazenda Pública acarreta a extinção total do
        crédito tributário. Em linhas gerais, a prescrição é o não exercício do direito
        dentro de um prazo legal, sendo a perda do direito de ação, onde o direito
        material torna-se inexigível e, em se tratando de matéria tributária, é o prazo em
        que a Fazenda Pública tem para propor a execução do crédito tributário contra o
        sujeito passivo, conforme dispõe o art. 174 do CTN, in verbis: Art. 174 A ação
        para a cobrança do credito tributário prescreve em cinco anos, contados da data da
        sua constituição definitiva. Além da prescrição propriamente dita, o Superior
        Tribunal de Justiça, a fim de harmonizar o artigo 174 do Código Tributário
        Nacional com o artigo 40 da Lei nº 6.830 /1980, pacificou a prescrição
        intercorrente na Execução Fiscal. A Lei nº 11.051 /2004, no artigo 6º , trouxe a
        previsão da prescrição intercorrente, visto que, acrescentou ao artigo 40 da Lei
        nº 6.830 /1980 o § 4º, in verbis: “Art. 40 – O juiz suspenderá o curso da
        execução, enquanto não for localizado o devedor ou encontrados bens sobre os quais
        possa recair a penhora, e, nesses casos, não correrá o prazo de prescrição. (…). §
        4º – Se da decisão que ordenar o arquivamento tiver decorrido o prazo
        prescricional, o juiz, depois de ouvida a Fazenda Pública, poderá, de ofício,
        reconhecer a prescrição intercorrente e decretá-la de imediato”. Destaca-se que a
        prescrição intercorrente necessariamente ocorrerá quando o Fisco, após iniciar a
        Execução contra o contribuinte, não da curso ao procedimento judicial fiscal, ou
        seja, o processo não pode ser eterno, sendo certo que a mesma somente será
        reconhecida se o Fisco for o responsável pela inércia da Execução por mais de
        cinco anos, quando então, a cobrança será considerada prescrita e o crédito
        tributário extinto.
      </Typography>
    ),
  },
  {
    question:
      "A partir de que idade, a criança é obrigada à tirar CPF para abater no imposto de renda?",
    answer: (
      <Typography>
        De acordo com a Instrução Normativa RFB nº 1.760, de 2017, que trata do Cadastro
        de Pessoas Físicas (CPF). Os contribuintes que desejarem incluir seus dependentes
        na declaração do Imposto de Renda de 2018 deverão registrá-los no CPF caso tenham
        8 anos ou mais. A obrigatoriedade valia somente para dependentes com 12 anos ou
        mais. A redução da idade visa evitar a retenção em malha fiscal do contribuinte
        declarante, possibilitando maior celeridade na restituição do crédito tributário.
        A partir do exercício de 2019, estarão obrigadas a se inscrever no CPF as pessoas
        físicas que constem como dependentes para fins de Imposto sobre a Renda da Pessoa
        Física, independentemente da idade.
      </Typography>
    ),
  },
];

// ----------------------------------------------------------------------

const variants: Variants = varFade("inUp", { distance: 24 });

export function HomeFAQs({ sx, ...other }: BoxProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    [],
  );

  const renderList = () => (
    <>
      <Box sx={{ my: { xs: 5, md: 10 } }}>
        {FAQs.map((faq) => (
          <Accordion
            key={faq.question}
            expanded={expanded === faq.question}
            onChange={handleChangeExpanded(faq.question)}
          >
            <AccordionSummary>
              <Typography variant="h6" sx={{ pr: 1, flexGrow: 1 }}>
                {faq.question}
              </Typography>

              <Iconify
                icon={
                  expanded === faq.question ? "eva:minus-outline" : "eva:plus-outline"
                }
                sx={{ transform: "translateY(4px)" }}
              />
            </AccordionSummary>

            <AccordionDetails sx={{ color: "text.secondary" }}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );

  return (
    <>
      <Divider soft my-6 />
      <Box
        component="section"
        sx={[
          {
            position: "relative",
            paddingTop: "-10px",
            marginBottom: "20px",
            py: { xs: 5, md: 10 },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container component={MotionViewport}>
          <Grid container spacing={{ md: 3 }} sx={{ justifyContent: "center" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <m.div variants={variants}>
                <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Perguntas Frequentes
                </h2>
              </m.div>

              <m.div variants={variants}>{renderList()}</m.div>

              <Box
                sx={(theme) => ({
                  gap: 3,
                  display: "flex",
                  borderRadius: 3,
                  textAlign: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  px: { xs: 3, md: 5 },
                  py: { xs: 6, md: 8 },
                  border: `dashed 1px ${theme.vars.palette.divider}`,
                })}
              >
                <m.div variants={variants}></m.div>

                <m.div variants={variants}>
                  {/* <Typography component="h6" variant="h3">
                    Tem mais dúvidas?
                  </Typography> */}
                </m.div>
                <m.div>
                  {/* <Typography sx={{ color: "text.secondary" }}>
                    Entre em contato com um de nossos especialistas!
                  </Typography> */}
                  {/* <BlurryBlob
                    className=" rounded-xl opacity-45"
                    firstBlobColor="bg-green-500"
                    secondBlobColor="bg-blue-800"
                  /> */}
                  <MarketingContactInfo className="justify-start align-middle ml-10" />
                  {/* <Button
                  size="large"
                  color="info"
                  variant="contained"
                  href="mailto:yasmin@fradema.com.br?subject=Dúvida Cliente: &cc=ti4@fradema.com.br&body=Olá, me chamo... e gostaria de esclarecer uma dúvida..."
                >
                  Email
                </Button>
                <m.div variants={variants}></m.div>
                <Button size="large" color="info" variant="contained" href="#">
                  WhatsApp
                </Button> */}
                </m.div>
              </Box>
            </Grid>
          </Grid>
          <TrianglePattern
            sx={{
              top: -40,
              left: 0,
              right: 500,
              zIndex: -1,
              mx: "auto",
              width: 600,
              height: 600,
              maxWidth: 1,
            }}
          />
          <TrianglePattern
            sx={{
              top: -40,
              left: 0,
              right: 500,
              zIndex: -1,
              mx: "auto",
              width: 600,
              height: 600,
              maxWidth: 1,
            }}
          />

          <TrianglePattern
            sx={{
              top: -40,
              left: 0,
              right: 0,
              zIndex: -1,
              mx: "auto",
              width: 600,
              height: 600,
              maxWidth: 1,
            }}
          />

          <TrianglePattern
            sx={{
              top: -40,
              left: 0,
              right: 0,
              zIndex: -1,
              mx: "auto",
              width: 600,
              height: 600,
              maxWidth: 1,
            }}
          />
        </Container>
      </Box>
    </>
  );
}
