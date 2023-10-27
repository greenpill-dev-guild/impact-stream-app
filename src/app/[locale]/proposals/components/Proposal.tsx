"use client";
import React, { useState, useEffect } from "react";
import { SummaryProposal } from "@/app/types";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { usePrivy } from "@privy-io/react-auth";
import useCheckTokens from "../../hooks/useCheckTokens";
import { useContext } from "react";
import { GrantItem } from "../../components/GrantItem";
import { GrantsContext } from "@/app/context/GrantContext";
import { logoutSupabase } from "../../../../../lib/supabase";

export default function Proposal() {
  const { ready, authenticated, logout, user } = usePrivy();
  const { isRefreshTokenValid } = useCheckTokens();
  const router = useRouter();
  const { grants } = useContext(GrantsContext);
  const [authorId, setAuthorId] = useState<string>();
  
  useEffect(() => {
    setAuthorId(user?.id);
  }, [user]);
  
  if (!ready) return null;
  if (ready && !authenticated) {
    router.push("/");
  }
  if (!isRefreshTokenValid) {
    logoutSupabase();
    logout();
    router.push("/");
  }

  return (
    <div>
      <ProposalList authorId={authorId} grants={grants} />
    </div>
  );
}

const ProposalList = ({ grants, authorId }: { grants: SummaryProposal[], authorId: string|undefined }) => {
  const t = useTranslations("Proposals");
  const router = useRouter();

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      <div className="mb-14">
        <h3 className="font-bold mb-2 ml-4">{t("heading")}</h3>
        {/* filter out by status and then map the cards */}
        {grants ? (
          grants
            .filter((p) => p.approved === true || (p.approved === null && p.author.id === authorId))
            .map((grant) => (
              <div className="p-2" key={grant.id}>
                <GrantItem
                  key={grant.id}
                  grant={grant}
                  showStatus={false}
                  showAction={true}
                />
              </div>
            ))
        ) : (
          <p className="text-sm text-center italic my-10">{t("nullMessage")}</p>
        )}
        {/* Botton button to add new proposal */}
        <div className="fixed bottom-10 right-0 left-0 bg-white p-5 z-0">
          <button
            onClick={() => router.push("/grants/write")}
            className="w-full border border-slate-400 hover:bg-sky-600 rounded-md leading-10 font-bold"
          >
            {t("addProposalButton")}
          </button>
        </div>
      </div>
    </ul>
  );
};
