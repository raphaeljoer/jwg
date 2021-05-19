import React, { ReactChild, ReactElement, ReactNode } from "react";
import Cta from "@/components/molecules/Cta";
import ICtaProps from "@/types/cta";

export interface IHeroProps {
  image?: string | undefined;
  element?: string | undefined;
  children: JSX.Element;
};

export default IHeroProps;
