// Code generated by tmjson. DO NOT EDIT

package types

import (
	"encoding/json"
	"fmt"
)

type _typeTagged struct {
	T string          `json:"type"`
	V json.RawMessage `json:"value"`
}

const _typeTag_EventDataBlockSyncStatus = "tendermint/event/BlockSyncStatus"

// MarshalJSON implements the json.Marshaler interface for EventDataBlockSyncStatus.
// It wraps the encoding in a type-tagged object.
func (v EventDataBlockSyncStatus) MarshalJSON() ([]byte, error) {
	type shim EventDataBlockSyncStatus
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataBlockSyncStatus, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataBlockSyncStatus.
// It expects a type-tagged object with the tag "tendermint/event/BlockSyncStatus".
func (v *EventDataBlockSyncStatus) UnmarshalJSON(data []byte) error {
	type shim EventDataBlockSyncStatus
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataBlockSyncStatus {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataBlockSyncStatus)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataCompleteProposal = "tendermint/event/CompleteProposal"

// MarshalJSON implements the json.Marshaler interface for EventDataCompleteProposal.
// It wraps the encoding in a type-tagged object.
func (v EventDataCompleteProposal) MarshalJSON() ([]byte, error) {
	type shim EventDataCompleteProposal
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataCompleteProposal, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataCompleteProposal.
// It expects a type-tagged object with the tag "tendermint/event/CompleteProposal".
func (v *EventDataCompleteProposal) UnmarshalJSON(data []byte) error {
	type shim EventDataCompleteProposal
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataCompleteProposal {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataCompleteProposal)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataNewBlock = "tendermint/event/NewBlock"

// MarshalJSON implements the json.Marshaler interface for EventDataNewBlock.
// It wraps the encoding in a type-tagged object.
func (v EventDataNewBlock) MarshalJSON() ([]byte, error) {
	type shim EventDataNewBlock
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataNewBlock, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataNewBlock.
// It expects a type-tagged object with the tag "tendermint/event/NewBlock".
func (v *EventDataNewBlock) UnmarshalJSON(data []byte) error {
	type shim EventDataNewBlock
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataNewBlock {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataNewBlock)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataNewBlockHeader = "tendermint/event/NewBlockHeader"

// MarshalJSON implements the json.Marshaler interface for EventDataNewBlockHeader.
// It wraps the encoding in a type-tagged object.
func (v EventDataNewBlockHeader) MarshalJSON() ([]byte, error) {
	type shim EventDataNewBlockHeader
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataNewBlockHeader, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataNewBlockHeader.
// It expects a type-tagged object with the tag "tendermint/event/NewBlockHeader".
func (v *EventDataNewBlockHeader) UnmarshalJSON(data []byte) error {
	type shim EventDataNewBlockHeader
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataNewBlockHeader {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataNewBlockHeader)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataNewEvidence = "tendermint/event/NewEvidence"

// MarshalJSON implements the json.Marshaler interface for EventDataNewEvidence.
// It wraps the encoding in a type-tagged object.
func (v EventDataNewEvidence) MarshalJSON() ([]byte, error) {
	type shim EventDataNewEvidence
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataNewEvidence, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataNewEvidence.
// It expects a type-tagged object with the tag "tendermint/event/NewEvidence".
func (v *EventDataNewEvidence) UnmarshalJSON(data []byte) error {
	type shim EventDataNewEvidence
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataNewEvidence {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataNewEvidence)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataNewRound = "tendermint/event/NewRound"

// MarshalJSON implements the json.Marshaler interface for EventDataNewRound.
// It wraps the encoding in a type-tagged object.
func (v EventDataNewRound) MarshalJSON() ([]byte, error) {
	type shim EventDataNewRound
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataNewRound, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataNewRound.
// It expects a type-tagged object with the tag "tendermint/event/NewRound".
func (v *EventDataNewRound) UnmarshalJSON(data []byte) error {
	type shim EventDataNewRound
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataNewRound {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataNewRound)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataRoundState = "tendermint/event/RoundState"

// MarshalJSON implements the json.Marshaler interface for EventDataRoundState.
// It wraps the encoding in a type-tagged object.
func (v EventDataRoundState) MarshalJSON() ([]byte, error) {
	type shim EventDataRoundState
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataRoundState, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataRoundState.
// It expects a type-tagged object with the tag "tendermint/event/RoundState".
func (v *EventDataRoundState) UnmarshalJSON(data []byte) error {
	type shim EventDataRoundState
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataRoundState {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataRoundState)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataStateSyncStatus = "tendermint/event/StateSyncStatus"

// MarshalJSON implements the json.Marshaler interface for EventDataStateSyncStatus.
// It wraps the encoding in a type-tagged object.
func (v EventDataStateSyncStatus) MarshalJSON() ([]byte, error) {
	type shim EventDataStateSyncStatus
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataStateSyncStatus, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataStateSyncStatus.
// It expects a type-tagged object with the tag "tendermint/event/StateSyncStatus".
func (v *EventDataStateSyncStatus) UnmarshalJSON(data []byte) error {
	type shim EventDataStateSyncStatus
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataStateSyncStatus {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataStateSyncStatus)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataString = "tendermint/event/ProposalString"

// MarshalJSON implements the json.Marshaler interface for EventDataString.
// It wraps the encoding in a type-tagged object.
func (v EventDataString) MarshalJSON() ([]byte, error) {
	type shim EventDataString
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataString, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataString.
// It expects a type-tagged object with the tag "tendermint/event/ProposalString".
func (v *EventDataString) UnmarshalJSON(data []byte) error {
	type shim EventDataString
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataString {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataString)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataTx = "tendermint/event/Tx"

// MarshalJSON implements the json.Marshaler interface for EventDataTx.
// It wraps the encoding in a type-tagged object.
func (v EventDataTx) MarshalJSON() ([]byte, error) {
	type shim EventDataTx
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataTx, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataTx.
// It expects a type-tagged object with the tag "tendermint/event/Tx".
func (v *EventDataTx) UnmarshalJSON(data []byte) error {
	type shim EventDataTx
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataTx {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataTx)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataValidatorSetUpdates = "tendermint/event/ValidatorSetUpdates"

// MarshalJSON implements the json.Marshaler interface for EventDataValidatorSetUpdates.
// It wraps the encoding in a type-tagged object.
func (v EventDataValidatorSetUpdates) MarshalJSON() ([]byte, error) {
	type shim EventDataValidatorSetUpdates
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataValidatorSetUpdates, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataValidatorSetUpdates.
// It expects a type-tagged object with the tag "tendermint/event/ValidatorSetUpdates".
func (v *EventDataValidatorSetUpdates) UnmarshalJSON(data []byte) error {
	type shim EventDataValidatorSetUpdates
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataValidatorSetUpdates {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataValidatorSetUpdates)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_EventDataVote = "tendermint/event/Vote"

// MarshalJSON implements the json.Marshaler interface for EventDataVote.
// It wraps the encoding in a type-tagged object.
func (v EventDataVote) MarshalJSON() ([]byte, error) {
	type shim EventDataVote
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_EventDataVote, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for EventDataVote.
// It expects a type-tagged object with the tag "tendermint/event/Vote".
func (v *EventDataVote) UnmarshalJSON(data []byte) error {
	type shim EventDataVote
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_EventDataVote {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_EventDataVote)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_DuplicateVoteEvidence = "tendermint/DuplicateVoteEvidence"

// MarshalJSON implements the json.Marshaler interface for DuplicateVoteEvidence.
// It wraps the encoding in a type-tagged object.
func (v DuplicateVoteEvidence) MarshalJSON() ([]byte, error) {
	type shim DuplicateVoteEvidence
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_DuplicateVoteEvidence, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for DuplicateVoteEvidence.
// It expects a type-tagged object with the tag "tendermint/DuplicateVoteEvidence".
func (v *DuplicateVoteEvidence) UnmarshalJSON(data []byte) error {
	type shim DuplicateVoteEvidence
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_DuplicateVoteEvidence {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_DuplicateVoteEvidence)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}

const _typeTag_LightClientAttackEvidence = "tendermint/LightClientAttackEvidence"

// MarshalJSON implements the json.Marshaler interface for LightClientAttackEvidence.
// It wraps the encoding in a type-tagged object.
func (v LightClientAttackEvidence) MarshalJSON() ([]byte, error) {
	type shim LightClientAttackEvidence
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_LightClientAttackEvidence, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for LightClientAttackEvidence.
// It expects a type-tagged object with the tag "tendermint/LightClientAttackEvidence".
func (v *LightClientAttackEvidence) UnmarshalJSON(data []byte) error {
	type shim LightClientAttackEvidence
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_LightClientAttackEvidence {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_LightClientAttackEvidence)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}