import type { ComponentType } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import NorthlineRetail from './NorthlineRetail';
import Brightpathagency from './Brightpathagency';
import Harbor from './harbor';

const pages: Record<string, ComponentType> = {
  'northline-retail': NorthlineRetail,
  'brightpath-agency': Brightpathagency,
  'harbor': Harbor,
};

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const Page = slug ? pages[slug] : undefined;
  if (!Page) return <Navigate to="/" replace />;
  return <Page />;
}
