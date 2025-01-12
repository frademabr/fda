import type { BoxProps } from "@mui/material/Box";

import { varAlpha } from "minimal-shared/utils";

import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineDot from "@mui/lab/TimelineDot";
import Container from "@mui/material/Container";
import TimelineItem from "@mui/lab/TimelineItem";
import Typography from "@mui/material/Typography";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineSeparator from "@mui/lab/TimelineSeparator";

import { CONFIG } from "src/global-config";

// ----------------------------------------------------------------------

const COLORS = ["primary", "secondary", "warning", "success"] as const;

const TIMELINES = [
  {
    title: "Planning",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
  {
    title: "Research",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
  {
    title: "Optimizing",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
  {
    title: "Results",
    description:
      "Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio. Donec mollis hendrerit risus.",
  },
];

// ----------------------------------------------------------------------

export function MarketingServicesHowItWork({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          ...theme.mixins.bgGradient({
            images: [
              `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0)})`,
              `url(${CONFIG.assetsDir}/assets/images/home/galaxybig2.jpg)`,
            ],
          }),
          color: "common.white",
          py: { xs: 10, md: 15 },
          height: "960px",
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container className="-mb-12">
        <div className="">
          <Typography
            className="flex flex-1 text-pretty mx-auto justify-center mt-30 text-9xl -mb-20 text-opacity-80"
            sx={{
              display: "flex",
              alignContent: "center",
              fontSize: "152px",
              fontWeight: "bold",
              marginBottom: "-150px",
              paddingTop: "200px",
              // mixBlendMode: "plus-lighter",
              opacity: "0.75",
            }}
          >
            FRADEMA
          </Typography>
        </div>
      </Container>

      <Box
        component="section"
        sx={[
          (theme) => ({
            ...theme.mixins.bgGradient({
              images: [
                `linear-gradient(to bottom, ${varAlpha(theme.vars.palette.common.blackChannel, 0)}, ${varAlpha(theme.vars.palette.common.blackChannel, 0)})`,
                `url(${CONFIG.assetsDir}/assets/images/home/nyblue.png)`,
              ],
            }),
            color: "common.white",
            py: { xs: 25, md: 30 },
            marginTop: "100px",
            // width: "900px",
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      ></Box>

      {/* <Timeline position="alternate">
          {TIMELINES.map((value, index) => (
            <TimelineItem key={value.title}>
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  STEP {index + 1}
                </Typography>

                <Typography variant="h5" component="h6" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ opacity: 0.72, maxWidth: { md: 360 }, ...(index % 2 && { ml: 'auto' }) }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline> */}
    </Box>
  );
}
