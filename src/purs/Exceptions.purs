module Exceptions (parse) where

import Prelude

parse ∷ ∀ t a. Category a => a t t
parse = id
