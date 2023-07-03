export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      proposal_collaborators: {
        Row: {
          collaborator_id: string | null
          id: string
          proposal_id: string | null
        }
        Insert: {
          collaborator_id?: string | null
          id?: string
          proposal_id?: string | null
        }
        Update: {
          collaborator_id?: string | null
          id?: string
          proposal_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposal_collaborators_collaborator_id_fkey"
            columns: ["collaborator_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposal_collaborators_proposal_id_fkey"
            columns: ["proposal_id"]
            referencedRelation: "proposals"
            referencedColumns: ["id"]
          }
        ]
      }
      proposals: {
        Row: {
          affected_locations: string | null
          author_id: string | null
          community_problem: string | null
          created_at: string | null
          description: string | null
          id: string
          key_players: string | null
          location: string | null
          minimum_budget: number | null
          project_milestones: Json | null
          proposed_solution: string | null
          timeline: string | null
          title: string | null
        }
        Insert: {
          affected_locations?: string | null
          author_id?: string | null
          community_problem?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          key_players?: string | null
          location?: string | null
          minimum_budget?: number | null
          project_milestones?: Json | null
          proposed_solution?: string | null
          timeline?: string | null
          title?: string | null
        }
        Update: {
          affected_locations?: string | null
          author_id?: string | null
          community_problem?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          key_players?: string | null
          location?: string | null
          minimum_budget?: number | null
          project_milestones?: Json | null
          proposed_solution?: string | null
          timeline?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "proposals_user_id_fkey"
            columns: ["author_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          address: string | null
          created_at: string | null
          family_name: string | null
          id: string
          name: string | null
          onboarded: boolean | null
          phone_number: string | null
          village_neighborhood: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          family_name?: string | null
          id: string
          name?: string | null
          onboarded?: boolean | null
          phone_number?: string | null
          village_neighborhood?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          family_name?: string | null
          id?: string
          name?: string | null
          onboarded?: boolean | null
          phone_number?: string | null
          village_neighborhood?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}