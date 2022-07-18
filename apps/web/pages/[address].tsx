import type { NextPage } from "next";
import React from "react";
import { ViewAuctionsTemplate } from "../templates/ViewAuctions";
import { ServiceCtxProvider } from "../services/ServiceContext";
import { useRouter } from "next/router";
import {
  getFallbackStaticPaths,
  getStaticAuctionProps,
  StaticProps,
} from "../services/static";
import { Page } from "../components/Page";
import { SITE_TITLE } from "../utils/seo";
import { FallbackPage } from "../templates/FallbackPage";

const ViewAuctions: NextPage<StaticProps> = ({ auction, address, config }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <FallbackPage />;
  }

  return (
    <Page title={`${SITE_TITLE} | ${config.name.toLowerCase()}s`}>
      <ServiceCtxProvider key={address} address={address} config={config}>
        <ViewAuctionsTemplate auction={auction} />
      </ServiceCtxProvider>
    </Page>
  );
};

export const getStaticProps = getStaticAuctionProps;
export const getStaticPaths = getFallbackStaticPaths;

export default ViewAuctions;
