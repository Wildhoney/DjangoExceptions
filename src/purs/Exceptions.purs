module Exceptions (parse, read, Field) where

import Prelude
import Data.Array as A
import Data.Foreign as F
import Data.Maybe as M
import Data.StrMap as SM

newtype Field = Field { field :: Array String, messages :: Array String }
data Lookup = ArrayLookup (Array String) | StrMapLookup (SM.StrMap (Array String)) | Empty

read ∷ SM.StrMap (Array String) → Array String → Array Field
read m f = case messages of
    ArrayLookup xs  → [Field { field: f, messages: xs }]
    StrMapLookup xs → parse xs f
    Empty           → [Field { field: ["None"], messages: [] }]
    where
        wrap a = if F.isArray <<< F.toForeign $ a then ArrayLookup a else StrMapLookup $ SM.singleton "firstName" ["..."]
        messages = case A.last f of
            M.Just x  → M.maybe Empty wrap $ SM.lookup x m
            M.Nothing → Empty

parse ∷ SM.StrMap (Array String) → Array String → Array Field
parse m f = A.concatMap (\field → read m (f <> [field])) $ SM.keys m
