"use client";

import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { _mock, _tags, _FiliaisPosts } from "src/_mock";

import { Advertisement } from "../../advertisement";
import { PostSidebar } from "../../blog/post-sidebar";
import { FiliaisPosts } from "../posts/Filiais-posts";
import { FiliaisNewsletter } from "../Filiais-newsletter";
import { PostSearchMobile } from "../../blog/post-search-mobile";
import { FiliaisFeaturedPosts } from "../posts/Filiais-featured-posts";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";

// ----------------------------------------------------------------------

const posts = _FiliaisPosts.slice(0, 8);
const recentPosts = _FiliaisPosts.slice(-4);
const featuredPosts = _FiliaisPosts.slice(0, 5);

export function FiliaisPostsView() {
  return (
    <>
      <PostSearchMobile />

      <FiliaisFeaturedPosts posts={featuredPosts} />

      <Container component="section" sx={{ mt: 10 }}>
        <Grid container spacing={{ md: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <FiliaisPosts posts={posts} />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <PostSidebar
              tags={_tags}
              categories={[
                { label: "Filiais", path: "" },
                { label: "Community", path: "" },
                { label: "Tutorials", path: "" },
                { label: "Business", path: "" },
                { label: "Management", path: "" },
              ]}
              recentPosts={recentPosts}
              slots={{
                bottomNode: (
                  <Advertisement
                    title="Advertisement"
                    description="Duis leo. Donec orci lectus, aliquam ut, faucibus non"
                    imageUrl={_mock.image.Filiais(9)}
                    action={
                      <Button variant="contained" color="primary">
                        Go now
                      </Button>
                    }
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <FiliaisLandingFreeSEO />

      <FiliaisNewsletter />
    </>
  );
}
