import client from "@/graphql/client";
import {GetCardProjectsQuery, GetFullProjectsQuery} from "@/graphql/generated/graphql";
import {GET_CARD_PROJECTS, GET_FULL_PROJECTS} from "@/graphql/queries";
import {app} from "@/config/app";

export const getCardProjects = async (first?: number) => {
  const {projects: apiProjects} = await client.request<GetCardProjectsQuery>(GET_CARD_PROJECTS, {first: first || 12});
  return apiProjects.map(project => {
    return {
      id: project.id,
      name: project.name,
      slug: project.slug,
      cover: project.cover?.url || app.ui.noImage,
      target: project.target,
      impactGoal: project.impactGoal,
    }
  })
};

export const getFullProjects = async (first?: number) => {
  const {projects: apiProjects} = await client.request<GetFullProjectsQuery>(GET_FULL_PROJECTS, {first: first || 12});
  return apiProjects.map(project => {
    return {
      id: project.id,
      name: project.name,
      slug: project.slug,
      cover: project.cover?.url || app.ui.noImage,
      objective: project.objective?.html,
      target: project.target,
      ageRange: project.ageRange,
      impactGoal: project.impactGoal,
      activities: project.activities,
    }
  })
};



