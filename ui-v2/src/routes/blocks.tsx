import {
	buildCountFilterBlockDocumentsQuery,
	buildListFilterBlockDocumentsQuery,
} from "@/api/block-documents";
import { buildListFilterBlockTypesQuery } from "@/api/block-types";
import { BlocksPage } from "@/components/blocks/blocks-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blocks")({
	component: RouteComponent,
	loader: ({ context: { queryClient } }) => {
		// ----- Critical data
		return Promise.all([
			queryClient.ensureQueryData(buildListFilterBlockTypesQuery()),
			queryClient.ensureQueryData(buildListFilterBlockDocumentsQuery()),
			queryClient.ensureQueryData(buildCountFilterBlockDocumentsQuery()),
		]);
	},
	wrapInSuspense: true,
});

function RouteComponent() {
	return <BlocksPage />;
}
